# Getting Started with SteamCMD

This guide is intented to run the dedicated server bare metal using SteamCMD.

## Ensuring the required GLIBC dependencies

The dedicated server has bleeding edge glibc requirements. As of writing, you need `GLIBC_2.39`, which many Linux distros don't ship with. We recommend:

1. [Arch Linux](https://archlinux.org/)
2. [Ubuntu 23](https://ubuntu.com/) or later

Alternatively, you can download [GLIBC](https://ftp.gnu.org/gnu/glibc/) yourself and place the resulting binaries in the same directory as the server.

## Installing SteamCMD

::: tip
You can skip this step if you have `steamcmd` available.
:::

Go over to [Valve's documentation](https://developer.valvesoftware.com/wiki/SteamCMD) and download/install SteamCMD for your operating system. Typically, you want to use the version that's distributed with your package manager, but downloading manually works as well.

## Downloading/updating the dedicated server

First, pick a directory to install your dedicated server, and open it in your command shell. Then, use SteamCMD to download the required files.

```bash
steamcmd +force_install_dir . +login anonymous +app_update 2886350
```

This command also works to update the server when a new version is released. We also recommend placing this command (or your version of it) in a file called `update.sh` so you don't need to remember it.

## Running your server

For testing, you can use this command to run your server (it uses the world name `world`):

```bash
./linuxServer -y -n world
```

We recommend placing this command (or your version of it) in a script called `start.sh`.

If you want to keep your server up for any length of time, you'd likely want to use some sort of process management. The simplest is `screen`, which allows you to detach from processes as needed.

### Using `screen`

First, open a new `screen` session by running `screen`. Then, run the server's start command. Then press `Ctrl+A` then `D` to exit the screen while leaving the process running. You can return to the `screen` at any time by using `screen -r`.

### Using a script to automatically restart the server

If your server goes down for any reason, you'll have to log on to your server to restart it. This script keeps it running:

```bash
#!/bin/bash

# Loop indefinitely. CTRL+C will break you out to commandline
while true; do
    # Execute the command
    ./linuxServer --load world --yes


    # Check the exit status of the command
    if [ $? -ne 0 ]; then
        echo "Server stopped. Restart in 5 seconds..."
    else
        echo "Server stopped gracefully."
        break  # Exit the loop if the server stopped gracefully
    fi

    # Add a delay before restarting the server
    sleep 5
    echo "Restarting server..."
done
```
