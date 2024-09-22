import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react'

export default async function handleLogout() {
    const route = useRouter();
    await signOut();
    route.push('/');
}
