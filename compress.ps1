param (
    [string]$Path,
    [int]$Quality = 60
)

Add-Type -AssemblyName System.Drawing

function Compress-File([string]$SourcePath) {
    try {
        $img = [System.Drawing.Image]::FromFile($SourcePath)
        
        $encoder = [System.Drawing.Imaging.Encoder]::Quality
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $Quality)
        
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
        
        $destPath = $SourcePath + "_tmp.jpg"
        $img.Save($destPath, $codec, $encoderParams)
        $img.Dispose()
        
        $oldSize = (Get-Item $SourcePath).Length
        $newSize = (Get-Item $destPath).Length
        
        if ($newSize -lt $oldSize) {
            Remove-Item $SourcePath
            Move-Item $destPath $SourcePath -Force
            Write-Host "Success: $SourcePath - $([math]::Round($oldSize / 1MB, 2))MB -> $([math]::Round($newSize / 1MB, 2))MB"
        } else {
            Remove-Item $destPath
            Write-Host "Skipped: New size was larger for $SourcePath"
        }
    } catch {
        Write-Host "Error processing $SourcePath : $_" -ForegroundColor Red
    }
}

if (Test-Path $Path -PathType Container) {
    Get-ChildItem -Path $Path -Filter *.jpg -Recurse | ForEach-Object { Compress-File $_.FullName }
    Get-ChildItem -Path $Path -Filter *.JPG -Recurse | ForEach-Object { Compress-File $_.FullName }
} else {
    Compress-File $Path
}
