---
title: Moving a WSL Distro to Another Drive
date: 2020-11-24T08:17:23.097Z
comments: false
category: article
---
**Update 17/01/2021:** If you are using the WSL integration functionality in any JetBrains IDEs (i.e. Idea or RubyMine), following these instructions can cause that functionality to stop working. I haven't explored the cause in great depth (I just wanted to get things working again quickly.), but I suspect it's Step 5 that causes the issue. So far, I have not had any issues with VSCode after following these steps though.

---

*Note: I've had issues with running out of disk space when attempting to move distros that aren't freshly installed. Most of the steps in this post are the same steps as https://blog.iany.me/2020/06/move-wsl-to-another-drive/. I've added an extra step to make the distro the default, since this isn't set by WSL on import.*
<!--more-->
**Step 1** - Install Ubuntu (or your distro of choice) from the Windows Store. Make sure to launch it at least once to initialize it.

**Step 2** - Create a new location for your distro instance and export the distro instance.

```powershell
cd G:\
mkdir WSL
cd WSL
wsl --export Ubuntu ubuntu.tar
```

**Step 3** - Unregister the distro instance and prepare the destination directory.

```powershell
wsl --unregister Ubuntu
mkdir Ubuntu
wsl --import Ubuntu Ubuntu ubuntu.tar
```

**Step 4** - Set the default user for the moved distro.

Find the directory in registry `HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Lxss` which `DistributionName` is “Ubuntu”. Set its `DefaultUid` to decimal 1000 (or hex 3e8).

**Step 5** - Uninstall the distro you installed earlier from Windows Store.

**Step 6** - List installed WSL distros and check it is displayed. Then make your distro the default one launched.

```powershell
wsl -l
wsl -s Ubuntu
```
