import { HomeLayout } from "@/general/templates/home-layout/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>
            <div className="p-4 h-[70vh] w-full text-center">
                <p>Welcome To Home Page</p>
            </div>
        </HomeLayout>
    )
}

export { HomePage }