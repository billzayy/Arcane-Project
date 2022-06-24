-- Use Arcane_DB;

-- CREATE TABLE Login(
--     Id_Login    INT             PRIMARY KEY     AUTO_INCREMENT   NOT NULL,
--     UserName    VARCHAR(255)        NOT NULL,
--     Password    VARCHAR(255)        NOT NULL,
--     FullName    VARCHAR(255)        NULL,
--     Picture     VARCHAR  (255)      NULL
-- );

-- CREATE TABLE Contact(
--     Work_hour   Nvarchar(255)   NOT NULL,
--     Address     NVARCHAR(255)   NOT NULL,
--     Email       Nvarchar(255)   NOT NULL,
--     Phone       NvARCHAR(11)    NOT NULL
-- );

-- CREATE TABLE Product(
--     Id_Product      INT             PRIMARY KEY      AUTO_INCREMENT  NOT NULL,
--     P_Name          NVARCHAR(255)   NOT NULL,
--     P_Title         NVARCHAR(255)   NOT NULL,
--     P_Picture       NVARCHAR(255)   NOT NULL,
--     P_Describe      NVARCHAR(255)   NOT NULL,
--     P_Price         INT             NOT NULL,
--     P_Page          NVARCHAR(255)   NOT NULL,
--     P_Category      NVARCHAR(255)   NOT NULL,
--     P_Gender        NVARCHAR(255)   NOT NULL,
--     P_Sales         NVARCHAR(255)   NULL,
--     P_Material      NVARCHAR(255)   NOT NULL,
--     P_Manufacture   NVARCHAR(255)   NOT NULL,
--     P_Color         NVARCHAR(255)   NOT NULL,
--     P_Size          NVARCHAR(255)   NULL,
--     Content_1       NVARCHAR(255)   NOT NULL,
--     Content_2       NVARCHAR(255)   NOT NULL
-- );

-- CREATE TABLE Bills(
--     Id_Bill         INT     PRIMARY KEY      AUTO_INCREMENT NOT NULL,
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

-- INSERT INTO Product (P_Name, P_Title, P_Picture, P_Describe, P_Price, P_Page, P_Category, P_Gender, P_Sales, P_Material, P_Manufacture, P_Color, P_Size, Content_1, Content_2)VALUES

-- CLOTHES
-- ('Zaun', 'T-Shirt for Women','./img/Main/Clothes/Zaun.png','Round neckline, length to the hip line',13,'Main','Clothes','Female', 'Sale','100% microfiber','Arcane. E-commerce','3D print',NULL,'The jersey of the T-shirt is made of polyester yarn, which allows the skin to breathe and makes the fabric pleasant to the body. ','The material dries very quickly and does not wrinkle, which makes the T-shirt universal for everyday wear and sports.'),
-- ('Jinx and her drawing', 'Winter Jacket for Women','./img/Main/Clothes/Jinx-drawing.png','Round neckline, length to the hip line',160,'Main','Clothes','Female', 'Sale','100% microfiber','Arcane. E-commerce','3D print',NULL,'The lightweight model of the sweatshirt is made of two-layer knitwear: the inner layer is pleasant and comfortable for the body, the outer layer is for a durable and bright image. ','Sweatshirt with bright and saturated colors withstands an unlimited number of washes, thanks to a special application technology. '),
-- ('Arcane, Jinx crying inside the fire', 'T-shirt for men','./img/Main/Clothes/Jinx-Crying.png','Round neckline, length to the hip line',15,'Main','Clothes','Male', 'Sale','100% microfiber','Arcane. E-commerce','3D print',NULL,'The jersey of the T-shirt is made of polyester yarn, which allows the skin to breathe and makes the fabric pleasant to the body. ','The material dries very quickly and does not wrinkle, which makes the T-shirt universal for everyday wear and sports.'),
-- ('Arcane', 'T-shirt for men','./img/Main/Clothes/Arcane.png','Round neckline, length to the hip line',10,'Main','Clothes','Male', 'Sale','100% microfiber','Arcane. E-commerce','3D print',NULL,'The jersey of the T-shirt is made of polyester yarn, which allows the skin to breathe and makes the fabric pleasant to the body. ','The material dries very quickly and does not wrinkle, which makes the T-shirt universal for everyday wear and sports.'),
-- ('League of Legends', 'Zip sweatshirt for men','./img/Main/Clothes/LOL.png','Round neckline, length to the hip line',42,'Main','Clothes','Male', 'Sale','100% microfiber','Arcane. E-commerce','3D print',NULL,'Longsleeve is a long-sleeved T-shirt, a versatile option for everyday wear.','Breathable fabric allows you to wear it in the heat with shorts, and in cool weather under a bomber jacket or jeans.' )

-- Deco
-- ('Jayce', 'Poster 320х450 mm','./img/Main/Deco/Jayce.png','Plastic Poster',2,'Main','Deco','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Poster from Arcane Film','Present from Netflix' ),
-- ('Sisters', 'Poster 520х650 mm','./img/Main/Deco/Poster-1.png','Plastic Poster',3,'Main','Deco','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Poster from Arcane Film','Present from Netflix' ),
-- ('Sisters', 'Poster 520х650 mm','./img/Main/Deco/Poster-2.png','Plastic Poster',3,'Main','Deco','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Poster from Arcane Film','Present from Netflix' ),
-- ('Jayce', 'Poster 320х450 mm','./img/Main/Deco/Caitlyn.png','Plastic Poster',2,'Main','Deco','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Poster from Arcane Film','Present from Netflix' )

-- Other
-- ('Jinx under the rain', 'Backpack','./img/Main/Other/Backpack.png','Backpack',35,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' ),
-- ('Vi and Jinx', 'Canvas','./img/Main/Other/Canvas.png','Canvas',17,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' ),
-- ('Arcane', 'Case for Iphone 13','./img/Main/Other/Case.png','Case',8,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' ),
-- ('Jinx', 'Pillow, 3D print','./img/Main/Other/Pillow.png','Pillow',9,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' ),
-- ('Sisters', 'Sketchbook','./img/Main/Other/Note.png','Note',4,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' ),
-- ('Characters', 'Chameleon mug','./img/Main/Other/Cup.png','Cup',8,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' ),
-- ('Jinx and lightning around her', 'Key ring','./img/Main/Other/KeyChain.png','Key ring',1,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' ),
-- ('Jinx in dark', 'Shoulder Bag','./img/Main/Other/Bag.png','Shoulder Bag',17,'Main','Other','Object', 'Sale','plastic','Arcane. E-commerce','3D print',NULL,'Present from Arcane Film','Present from Netflix' )

-- INSERT INTO Login VALUES
-- ('admin','admin',NULL, NULL),
-- ('bill','2010','Phan Le Tuan','./src/img/User/Bill .jpeg');

