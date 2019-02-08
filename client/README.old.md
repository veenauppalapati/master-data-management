# client
React Starer App


App.js
|__ WholePage (holds everything together--> final stop before loading to app.js)
    |__ NavFrame ( Left side of the page --> holds the nav elements)
    |   |__ LinkCard
    |__ MainFrame ( Right side of the page --> holds both the spreadsheet panel and ButtonFrame)
        |__SpreadSheetPanel (container for the spreadsheet)
        |   |__Table
        |      |__TableRow
        |         |__TableCell
        |__ButtonFrame (container for the buttons)
            |__Button (5 buttons; 3 blue, 1 Green, 1 Red)