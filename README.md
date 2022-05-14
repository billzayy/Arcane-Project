# Arcane E-commerce Project
### This is a fullstack project using: 
* HTML / CSS / JS _( Front-End )_
* NodeJS _( Back-End )_
* MySQL _( Database )_
* Docker

We have some pages for this project :

* Main Page
* Product
* Shopping Cart
* Catalogue 
* Contact
* Responsive

--------------------------------
To use this project, you need to use Docker command on your terminal to build:
```
docker-compose up -d
```
--------------------------------
## Database:
Tables :
- Login ( Id_Login, UserName, Password, FullName, Picture )
- Product ( Id_Product, P_Name, P_Describe, P_Price, P_Category, P_Sales, P_Top, P_New, P_Material, P_Manufacture, P_Colour, P_Size , Content_1, Content_2 )
- Bills ( Id_Bill ,Id_Product, Id_UserName, B_BuyDate )
- Bills_Info ( Id_Bill ,Id_Product, P_Price, B_Quantity, B_Discount, B_Delivery )
- Contact ( Work_hour, Address, E-mail, Phone)

Diagram :
![alt text](/Diagram_Picture.png)



## Have a nice day for Coding !!!