<?php
$basepath = __DIR__;

foreach (glob('sc/*', GLOB_ONLYDIR ) as $path) {
    $folderName = basename($path);
    $outputFile = "{$basepath}/{$path}/readme.md";
    $content = "http://htmlpreview.github.io/?https://github.com/glennfriend/sc/blob/master/sc/{$folderName}/index.html";
    file_put_contents($outputFile, $content);
}

echo "Don\n";