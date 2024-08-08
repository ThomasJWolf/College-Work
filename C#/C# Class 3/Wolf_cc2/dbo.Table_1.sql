CREATE TABLE [dbo].[doctors] (
    [doctorID]        INT        IDENTITY (1, 1) NOT NULL,
    [name]            NCHAR (30) NOT NULL,
    [office]          NCHAR (30) NOT NULL,
    [email]           NCHAR (30) NOT NULL,
    [hire_date]       DATETIME NOT NULL,

    PRIMARY KEY CLUSTERED ([doctorID] ASC)
);

