# LÖVE 2D Typescript Definition Files
![Usage GIF](https://media.giphy.com/media/8rEiqcM9BldxRmSMgW/giphy.gif)

This project creates a file named `_G.d.ts`. This contains Typescript definitions to LÖVE 2D's `_G` environment.

## Usage
Obtain `_G.d.ts`. Either through the Releases page or by building the definition file yourself.

Place `_G.d.ts` within your Typescript project. LÖVE 2D's definitions should now be included in your project (depending on `tsconfig.json`). See the [Wiki]() for details regarding setup.

Ready to compile and run the project? [Typescript to Lua](https://github.com/Perryvw/TypescriptToLua) should work for you.

Once installed, `tstl -p .` should create all `.lua` files.

Now give your project to the LÖVE 2D executable, your project will now run!

## Build Dependencies
- [Moonscript](https://moonscript.org)
- [Lua 5.3.4](https://www.lua.org/download.html)

## Building and Cleaning
```bash
# Get submodules
git submodule update --init

# Build
moonc tots.moon
lua tots.lua > l2d.d.ts
cat other-definitions/*.d.ts *.d.ts >> _G.d.ts

# Via Powershell
.\fix.ps1

# Test
tstl -p .

# Cleaning
rm _G.d.ts l2d.d.ts *.lua tots.lua
```