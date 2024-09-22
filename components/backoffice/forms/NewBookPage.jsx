
import NewBookForm from './NewBookForm';
import { getData } from '@/lib/getData'

export default async function NewBookPage() {
    const categoriesData = await getData("categories");
    const usersData = (await getData("users")) ?? [];
    const authorData = usersData.filter((user) => user.role === "AUTHOR") ?? [];
    if (!categoriesData || !usersData) {
        return <div>Loading...</div>
    }

    const categories = categoriesData.map(category => ({
        id: category.id_category,
        title: category.title,
    }));

    const authors = authorData.map(author => ({
        id: author.id,
        name: author.name,
    }));

    return <NewBookForm categories={categories} authors={authors} />;
}
