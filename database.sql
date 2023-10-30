-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shoppinglist" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"quantity" INTEGER DEFAULT 1,
	"unit" VARCHAR(50),
	"purchased" BOOLEAN DEFAULT false
);

INSERT INTO "shoppinglist" 
    ("name", "quantity", "unit")
VALUES 
    ('oranges', 1, 'lbs'),
    ('brussels sprouts', 1, 'bag'),
    ('oatmeal', 2, 'containers'),
    ('eggs', 6, 'dozen'),
    ('cheese', 3, 'lbs');