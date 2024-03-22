# Common Issues

These are a collection of common issues encountered while trying to run a server.

## GLIBC_2.XX not found

Your operating system doesn't have the required GLIBC version. Either update, or choose a more bleeding-edge system. You can check out our recommendations [here](./quickstart.md#make-sure-your-os-is-recent).

## `libSPCommon.so` not found

Prepend `LD_LIBRARY_PATH=.` to your start command.
