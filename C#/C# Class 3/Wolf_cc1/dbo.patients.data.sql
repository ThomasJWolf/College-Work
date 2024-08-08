SET IDENTITY_INSERT [dbo].[patients] ON
INSERT INTO [dbo].[patients] ([patientID], [name], [address], [phone], [email], [deductible_limit])
VALUES
(1, N'John Doe', N'123 Maple St', N'555-1234', N'john.doe@email.com', 1000),
(2, N'Jane Smith', N'456 Oak St', N'555-5678', N'jane.smith@email.com', 1500),
(3, N'Jim Brown', N'789 Pine St', N'555-9012', N'jim.brown@email.com', 1200),
(4, N'Emily White', N'321 Birch St', N'555-3456', N'emily.white@email.com', 1300);
SET IDENTITY_INSERT [dbo].[patients] OFF
