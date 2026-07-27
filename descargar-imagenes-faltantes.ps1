# Descarga las imágenes de productos que HTTrack no pudo capturar
# porque se cargan dinámicamente por JavaScript.
#
# CÓMO USARLO:
# 1) Coloca este archivo y "images_faltantes.txt" dentro de la carpeta
#    Floristeria-El-Paraiso (junto a las carpetas css/, js/, images/).
# 2) Abre PowerShell en esa carpeta.
# 3) Ejecuta:  powershell -ExecutionPolicy Bypass -File .\descargar-imagenes-faltantes.ps1
#
# El script recorre images_faltantes.txt, crea las subcarpetas necesarias
# dentro de images/ y descarga cada foto directamente desde
# https://floristeriaelparaiso.com (que sigue en línea).

$baseUrl = "https://floristeriaelparaiso.com"
$listFile = Join-Path $PSScriptRoot "images_faltantes.txt"
$root = $PSScriptRoot

if (-not (Test-Path $listFile)) {
    Write-Host "No se encontró images_faltantes.txt junto a este script." -ForegroundColor Red
    exit 1
}

$paths = Get-Content $listFile | Where-Object { $_.Trim() -ne "" }
$total = $paths.Count
$ok = 0
$fail = 0
$failedList = @()

Write-Host "Descargando $total imágenes desde $baseUrl ..." -ForegroundColor Cyan

foreach ($relPath in $paths) {
    $relPath = $relPath.Trim()
    $destPath = Join-Path $root ($relPath -replace "/", [IO.Path]::DirectorySeparatorChar)
    $destDir = Split-Path $destPath -Parent

    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }

    # Codifica cada segmento de la URL (hay nombres con espacios, comas, tildes)
    $segments = $relPath -split "/"
    $encoded = ($segments | ForEach-Object { [Uri]::EscapeDataString($_) }) -join "/"
    $url = "$baseUrl/$encoded"

    try {
        Invoke-WebRequest -Uri $url -OutFile $destPath -ErrorAction Stop | Out-Null
        $ok++
    } catch {
        $fail++
        $failedList += $relPath
        Write-Host "  ✗ Falló: $relPath" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Listo. Descargadas: $ok / $total" -ForegroundColor Green
if ($fail -gt 0) {
    Write-Host "Fallaron $fail. Revisa manualmente (puede que el nombre tenga un caracter especial distinto en el servidor):" -ForegroundColor Yellow
    $failedList | ForEach-Object { Write-Host "  - $_" }
    $failedList | Out-File -FilePath (Join-Path $root "images_no_descargadas.txt") -Encoding utf8
}
