$ErrorActionPreference = 'Stop'
if (Get-Command py -ErrorAction SilentlyContinue) {
  py -m http.server 8765
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
  python -m http.server 8765
} else {
  Write-Host 'Python 3 nao foi encontrado. Instale-o e execute este arquivo novamente.' -ForegroundColor Yellow
  exit 1
}
