const input = document.getElementById('file-input');
const templateNode = document.getElementById('progress-template');
const fileProgressTemplate = templateNode.content.cloneNode(true);
const fileProgress = fileProgressTemplate.getElementById('file-progress');        
const progressBarContainer = document.getElementById('progress-bar-container');
const fileList = document.getElementById('file-list');

const BITES = 1024;


function deleteFile(index) {
    let files = Array.from(input.files);
    files.splice(index, 1);

    let newFileList = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
        newFileList.items.add(files[i]);
    }
    input.files = newFileList.files;
}


input.addEventListener('change', function() {
    if (this.files.length > 0) {
        let fileSize = 0;
        for (let i = 0; i < this.files.length; i++) {
            const currentFile = this.files[i];
            fileSize = currentFile.size / BITES;

            const li = document.createElement('li');
            li.textContent = currentFile.name + ' ' + fileSize.toFixed(2) + ' KB';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', function() {
                fileList.removeChild(li);
                deleteFile(i);
            });
        
            li.appendChild(deleteButton);
            fileList.appendChild(li);

            fileProgress.value += 100 / this.files.length;
        }
        progressBarContainer.appendChild(fileProgressTemplate);
    }
    else {
        fileProgress.value = 0; 
    }
});
