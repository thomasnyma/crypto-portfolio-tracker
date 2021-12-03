Write-Output "Setting up dev environment..."

Write-Output "Installing node modules for API..."
Set-Location ./api/
write-output "Testing API..."
npm install

Write-Output "Installing node modules for client..."
Set-Location ../client/
npm install

Write-Output "Done!"
Write-Host -NoNewLine 'Press any key to continue...';
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown');