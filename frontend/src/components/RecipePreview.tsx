interface RecipePreviewProps {
    name: string;
    image: string;
    description: string;
    rating: number;
}

const RecipePreview = ({
    name,
    image,
    description,
    rating,
}: RecipePreviewProps) => {
    return (
        <div className="w-full max-w-xs bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 p-4 rounded-xl shadow-md flex flex-row gap-4">
            {/* Image Section */}
            <div className="flex-shrink-0">
                <img
                    className="w-20 h-20 rounded-lg shadow-sm object-cover"
                    src={image}
                    alt={name}
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between">
                <h1 className="text-lg font-bold text-orange-600 dark:text-orange-400">
                    {name}
                </h1>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                    {description}
                </p>
                <h2 className="mt-2 text-sm font-semibold text-orange-700 dark:text-orange-400">
                    Rating: {rating}
                </h2>
            </div>
        </div>
    );
};

export default RecipePreview;
