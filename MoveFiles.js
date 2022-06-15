function MoveFiles() {
    var files = [];
    var folderMap = {};
    var batchsize = 350;
    var filecount = 0;


    //Connection IDs
    var sourcefolder = DriveApp.getRootFolder()
    //var sourcefolder = DriveApp.getFolderById("");
    var destinationfolder = DriveApp.getFolderById("");
    var sheet = SpreadsheetApp.openById("").getActiveSheet();

    var foldersIterator = destinationfolder.getFolders();
    var filesIterator = sourcefolder.searchFiles("mimeType='image/jpeg' or mimeType='image/png'or mimeType='image/gif'");

    while (filesIterator.hasNext()) {
        var file = filesIterator.next();
        files.push(file);
        filecount = filecount + 1
        if (filecount % 50 == 0) {
            Logger.log(filecount + " files located...")
        }
        if (filecount == batchsize) break;
    }

    Logger.log("TOTAL files located: " + filecount)

    while (foldersIterator.hasNext()) {
        var currentFolder = foldersIterator.next();
        folderMap[currentFolder.getName()] = currentFolder;
    }

    filelstlength = Math.min(files.length, batchsize)
    Logger.log("processing " + filelstlength + " files")

    for (var i = 0; i < filelstlength; i++) {
        var file = files[i];

        var filecreatedt = file.getDateCreated().getFullYear()
        var foldernamefromfile = folderMap[filecreatedt];

        if (foldernamefromfile) {
            file.moveTo(foldernamefromfile);
            Logger.log(parseInt(i / filelstlength * 100) + "% (" + i + ") Moved: " + file + " to " + filecreatedt);
            sheet.appendRow([file, filecreatedt]);
        }
    }
    Logger.log("COMPLETE")
}
