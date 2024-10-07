import os

def download_repo_to_file():
    # Get the current working directory (root of the project)
    root_dir = os.getcwd()
    
    # Initialize an empty string to store file contents
    all_contents = ""
    
    # Blacklist of directories and files to skip
    blacklist = ['node_modules', '.git', '__pycache__', '.vscode', '.idea']
    
    # Walk through all directories and files
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Remove blacklisted directories
        dirnames[:] = [d for d in dirnames if d not in blacklist]
        
        for filename in filenames:
            # Skip blacklisted files and directories
            if any(item in dirpath.split(os.sep) for item in blacklist):
                continue
            
            file_path = os.path.join(dirpath, filename)
            
            # Skip the output file itself to avoid infinite loop
            if filename == "context_output.txt":
                continue
            
            # Skip non-critical files and package files (adjust as needed)
            if filename.endswith(('.pyc', '.log', '.tmp', '.cache', 'package.json', 'package-lock.json', 'requirements.txt')):
                continue
            
            # Add file path as a header (relative to root)
            relative_path = os.path.relpath(file_path, root_dir)
            all_contents += f"\n\n--- {relative_path} ---\n\n"
            
            # Try to read the file contents
            try:
                with open(file_path, 'r', encoding='utf-8') as file:
                    all_contents += file.read()
            except Exception as e:
                all_contents += f"Error reading file: {str(e)}\n"
    
    # Write all contents to context_output.txt
    with open("context_output.txt", 'w', encoding='utf-8') as output_file:
        output_file.write(all_contents)

    print("Repository contents have been saved to context_output.txt")

# Call the function to download the repo
download_repo_to_file()
