import { APP_NAME } from "@/constants";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow-md border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-4 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
