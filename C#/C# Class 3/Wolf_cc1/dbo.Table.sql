CREATE TABLE [dbo].[patients]
(
	[patientID] INT NOT NULL PRIMARY KEY IDENTITY , 
    [name] NCHAR(30) NOT NULL, 
    [address] NCHAR(30) NOT NULL, 
    [phone] NCHAR(15) NOT NULL, 
    [email] NCHAR(50) NOT NULL, 
    [deductible_limit] INT NOT NULL
)
