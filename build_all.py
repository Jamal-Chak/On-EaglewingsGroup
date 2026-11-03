import subprocess


if __name__ == "__main__":
    subprocess.run("npm run build", check=True, shell=True)
