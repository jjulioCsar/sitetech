param (
    [string]$Path,
    [int]$Quality = 50
)

# This script will attempt to compress images even more aggressively
# and rename/convert them if possible, but for now we stay with JPG to avoid breaking imports
# unless we do a bulk update.

Add-Type -AssemblyName System.Drawing

function Aggressive-Compress([string]$SourcePath) {
    try {
        $img = [System.Drawing.Image]::FromFile($SourcePath)
        
        # Calculate new dimensions if image is too large (e.g., > 1920px)
        $maxWidth = 1600
        $newWidth = $img.Width
        $newHeight = $img.Height
        
        if ($img.Width -gt $maxWidth) {
            $ratio = $maxWidth / $img.Width
            $newWidth = $maxWidth
            $newHeight = [int]($img.Height * $ratio)
            
            $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $g = [System.Drawing.Graphics]::FromImage($newImg)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
            $g.Dispose()
            $img.Dispose()
            $img = $newImg
        }

        $encoder = [System.Drawing.Imaging.Encoder]::Quality
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $Quality)
        
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        
        $destPath = $SourcePath + "_ultra.jpg"
        $img.Save($destPath, $codec, $encoderParams)
        $img.Dispose()
        
        $oldSize = (Get-Item $SourcePath).Length
        $newSize = (Get-Item $destPath).Length
        
        # Always replace if new size is smaller and under a threshold or significantly smaller
        if ($newSize -lt $oldSize) {
            Remove-Item $SourcePath
            Move-Item $destPath $SourcePath -Force
            Write-Host "Ultra: $SourcePath - $([math]::Round($oldSize / 1KB, 2))KB -> $([math]::Round($newSize / 1KB, 2))KB"
        } else {
            Remove-Item $destPath
            Write-Host "Skipped Ultra: $SourcePath"
        }
    } catch {
        Write-Host "Error: $SourcePath : $_" -ForegroundColor Red
    }
}

Get-ChildItem -Path $Path -Filter *.jpg -Recurse | ForEach-Object { Aggressive-Compress $_.FullName }
Get-ChildItem -Path $Path -Filter *.JPG -Recurse | ForEach-Object { Aggressive-Compress $_.FullName }
