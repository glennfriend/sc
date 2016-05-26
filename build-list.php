<?php
$basepath = __DIR__;

foreach (glob('sc/*', GLOB_ONLYDIR ) as $path) {

    //
    $content = '';

    //
    $folderName = basename($path);
    $content .= "###Demo" . "\n";
    $content .= "http://htmlpreview.github.io/?https://github.com/glennfriend/sc/blob/master/sc/{$folderName}/index.html" . "\n";
    $content .= "\n";

    //
    $baseReadFile = "{$basepath}/{$path}/read.txt";
    if (file_exists($baseReadFile)) {
        $content .= "###Description" . "\n";
        $content .= file_get_contents($baseReadFile) . "\n";
        $content .= "\n";
    }

    //
    $outputFile = "{$basepath}/{$path}/readme.md";
    file_put_contents($outputFile, $content);
}

echo "Don\n";
