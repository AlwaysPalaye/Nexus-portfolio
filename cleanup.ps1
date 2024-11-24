# Remover páginas duplicadas ou não utilizadas
Remove-Item -Path "app/contact" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "app/about" -Recurse -Force -ErrorAction SilentlyContinue

# Remover componentes UI não utilizados
$unusedComponents = @(
    "accordion.tsx",
    "aspect-ratio.tsx",
    "breadcrumb.tsx",
    "calendar.tsx",
    "carousel.tsx",
    "chart.tsx",
    "input-otp.tsx",
    "pagination.tsx",
    "resizable.tsx",
    "slider.tsx",
    "toggle-group.tsx",
    "toggle.tsx"
)

foreach ($component in $unusedComponents) {
    Remove-Item -Path "components/ui/$component" -Force -ErrorAction SilentlyContinue
}

# Remover arquivos de teste não utilizados
Remove-Item -Path "jest.config.js" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "jest.setup.js" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "components/ui/__tests__" -Recurse -Force -ErrorAction SilentlyContinue

# Remover arquivos temporários e de build
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".swc" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
