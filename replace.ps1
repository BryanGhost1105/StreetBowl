$files = Get-ChildItem -Path "c:\Users\HP\Downloads\streetbowl" -Include *.html,*.js -Recurse
foreach ($file in $files) {
    $content = Get-Content -Raw $file.FullName
    
    # Replace Boli with Bole
    $content = $content -creplace 'Boli', 'Bole'
    $content = $content -creplace 'boli', 'bole'
    
    # Replace Mama Nkechi Bole with Iya Basil Jollof Spot (in index.html)
    $content = $content -replace 'Mama Nkechi Bole', 'Iya Basil Jollof Spot'
    
    # Add favicon
    if ($file.Extension -eq '.html' -and $content -notmatch 'rel="icon"') {
        $content = $content -replace '</head>', '<link rel="icon" href="./img/jollof (5).jpg"></head>'
    }
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
