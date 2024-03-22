# Quickstart

Here's a quick guide on setting up a bare metal Sapiens dedicated server on Linux.

## Make sure your OS is recent.

The dedicated server has bleeding edge glibc requirements. As of writing, you need `GLIBC_2.39`, which many Linux distros don't ship with. We recommend:

1. [Arch Linux](https://archlinux.org/)
2. [Ubuntu 23](https://ubuntu.com/) or later

## Grab the binaries

The Sapiens dedicated server is distributed through SteamCMD. Download SteamCMD by following [Valve's documentation](https://developer.valvesoftware.com/wiki/SteamCMD), and then run the following command where you want to install the server:

```bash
steamcmd +force_install_dir . +login anonymous +app_update 2886350
```

This downloads the latest binary from Steam. You can also use this command to update.

## Run the binary

To run the Linux server, use:

```bash
./linuxServer -y -n world
```

This starts the server on the default ports and creates/load a world called `world`

## Connect to your server

Use the IP of the computer it's running on (if it's the same computer, use `127.0.0.1`) and connect! Everything should be working now.
