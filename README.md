# Cyrylizing-Polish-extension
Extension that translates all the Polish written text on the screen to Polish Cyryllic

Works on: Chrome

## Usage
Load it unpacked inside the developer mode and then when you are on a Polish written website press the button in the upper right. It will transliterate the text content of paragraphs, headers and links to cyryllic.
After loading the extension you have to reload each tab in order to cyrylize any of those.

## Disclaimer
you can use it on English written websites but you have to remember that the extension translterates it like it is Polish. Therefore when you have the english phrase like this one:
"Regular expression operations" 
the extension wont translate it to it's phonetical version (what would be something like "Рэгуляр экспрэшин опэрэйшинс") but it will translate the phrase to 
"Рэгуляр экспрэссён опэратъйонс".

## Credits
[Polish Cyryllic](https://www.facebook.com/cyrpol/) as they've provided the regexp code in C# which I parsed using python to make a dictionary inside python which I've dumped to json using json.dump method.
Here's the [mentioned C# code](https://hastebin.com/cukokirali.vbs)



