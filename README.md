# GoogleAppScript

## Movefiles.js

In Google Drive made a change to their architecture that caused 26,000+ of my photo files to be consolidated from their various original locations to my root My Drive.
This caused navigation/scrolling to be very tedious with the folder constantly loading (on web). The page would have to repeatedly reload the next batch of files as I scrolled down. Finding specific files within the folder was not sustainable.

Issue discussed by others here:
https://support.google.com/drive/thread/87658395/an-item-was-automatically-placed-in-without-my-permission?hl=en

REQUIREMENTS: 
-	Move the files to a different folder, divided in subfolders for easy future navigation.
-	Most of the 26,000+ files were grandfathered in with Google’s unlimited photo storage at reduced quality. Moving the files should not increase storage usage.

SOLUTION:

The script moves all files matching a specific set of file types (images) to a folder matching the file's create date YYYY. 
All moved files are logged in a Google Sheet for tracking/troublshooting the process, logging destination folders and future nerdy pivot table metrics.
To get around Google App Script quotas (https://developers.google.com/apps-script/guides/services/quotas) and the max 6-minute processing time, 
I originally determined the estimted amount of files that could be processed within that time and set a max file count that should be processed each time the script was ran.
Time-driven triggers were used to re-run the script. I later reduced the file count to ensure proecessing time would not exceed 5 minutes since this was the greatest interval that was less than the max 6 quota.


Google Apps Script: https://script.google.com/home
