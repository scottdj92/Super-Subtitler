# Super-Subtitler
A projection-mapped speech-to-text translator


## Getting Started
First, run ```npm install```, then ```bower install```.

To see the project: run ```gulp``` and navigate to port 3000.

## Updating Your Dictionary
Updating your dictionary requires a build.
First, add your path when you bootstrap Julius.
```javascript 
new Julius('path/to/dfa', '/path/to/dict'); 
```

Then, you must use the ```mkdfa.pl``` file that's distributed with JuliusJS. On OSX, this makes use of the makefile command.

## More Info
See the documentation on [JuliusJS](https://github.com/zzmp/juliusjs).
