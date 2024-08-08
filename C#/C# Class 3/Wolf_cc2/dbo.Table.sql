CREATE TABLE [dbo].[patients] (
    [patientID]        INT        IDENTITY (1, 1) NOT NULL,
    [name]             NCHAR (30) NOT NULL,
    [address]          NCHAR (30) NOT NULL,
    [phone]            NCHAR (15) NOT NULL,
    [email]            NCHAR (50) NOT NULL,
    [deductible_limit] INT        NOT NULL,
    PRIMARY KEY CLUSTERED ([patientID] ASC)
);
