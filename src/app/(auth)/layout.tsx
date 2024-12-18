
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center justify-center h-full flex-col absolute w-full left-0 top-0 px-4">
            {children}
        </div>
    );
};
export default AuthLayout