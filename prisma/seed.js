const { PrismaClient } = require("@prisma/client")
const { categories, books } = require('./data.js')
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.category.deleteMany();
        console.log("Deleted records in category table");

        await prisma.book.deleteMany();
        console.log("Deleted records in book table")

        await prisma.category.createMany({
            data: categories
        });
        console.log("Added category data");

        await prisma.book.createMany({
            data: books
        })
        console.log("Added book data")
    } catch (error) {

    }
}
load();