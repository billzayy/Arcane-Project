-- CREATE TABLE Login(
--     Id_Login    INT             PRIMARY KEY     AUTO_INCREMENT   NOT NULL,
--     UserName    VARCHAR(255)    NOT NULL,
--     Password    VARCHAR(255)    NOT NULL,
--     FullName    VARCHAR(255)    NULL,
--     Picture     Varchar(255)    NULL
-- );

-- CREATE TABLE Contact(
--     Work_hour   Nvarchar(255)   NOT NULL,
--     Address     NVARCHAR(255)   NOT NULL,
--     Email       Nvarchar(255)   NOT NULL,
--     Phone       NvARCHAR(11)    NOT NULL
-- );

-- CREATE TABLE Product(
--     Id_Product      INT             PRIMARY KEY     NOT NULL,
--     P_Name          NVARCHAR(255)   NOT NULL,
--     P_Title         NVARCHAR(255)   NOT NULL,
--     P_Picture       NVARCHAR(255)   NOT NULL,
--     P_Describe      NVARCHAR(255)   NOT NULL,
--     P_Price         INT             NOT NULL,
--     P_Page          NVARCHAR(255)   NOT NULL,
--     P_Category      NVARCHAR(255)   NOT NULL,
--     P_Gender        NVARCHAR(255)   NOT NULL,
--     P_Sales         BOOLEAN         NULL,
--     P_Top           BOOLEAN         NULL,
--     P_New           BOOLEAN         NULL,
--     P_Material      NVARCHAR(255)   NOT NULL,
--     P_Manufacture   NVARCHAR(255)   NOT NULL,
--     P_Color         NVARCHAR(255)   NOT NULL,
--     P_Size          INT             NOT NULL,
--     Content_1       NVARCHAR(255)   NOT NULL,
--     Content_2       NVARCHAR(255)   NOT NULL
-- );

-- CREATE TABLE Bills(
--     Id_Bill         INT     PRIMARY KEY     NOT NULL,
--     Id_Product      INT     NOT NULL,
--     Id_Client       INT     NOT NULL,
--     B_BuyDate       Nvarchar(255)   NOT NUll,
--     FOREIGN KEY(Id_Product) REFERENCES Product(Id_Product),
--     FOREIGN KEY(Id_Client) REFERENCES Login(Id_Login)
-- );

-- CREATE TABLE Bills_Info(
--     Id_Bill         INT         NOT NULL,
--     Id_Product      INT         NOT NULL,
--     P_SumPrice      INT         NOT NULL,
--     B_Quantity      INT         NOT NULL,
--     B_Discount      INT         NOT NULL,
--     B_Delivery      NVARCHAR(55) NOT NULL,
--     FOREIGN KEY (Id_Bill) REFERENCES Bills(Id_Bill),
--     FOREIGN KEY (Id_Product) REFERENCES Product(Id_Product)
-- );