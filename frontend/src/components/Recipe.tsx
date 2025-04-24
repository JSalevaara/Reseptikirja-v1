interface RecipeProps {
    name: string;
    steps: Map<number, string>;
    image: string;
    rating: number;
    ingredients: Map<string, string>;
    description: string;
    timeActive: number;
    timePassive: number;
    // Add any other props you need
}

const Recipe = ({
    name,
    steps,
    image,
    rating,
    ingredients,
    description,
    timeActive,
    timePassive,
}: RecipeProps) => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-orange-400 to-red-700 text-neutral-900 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-50 p-6">
            <div className="w-full max-w-6xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 p-8 rounded-3xl shadow-2xl flex flex-col lg:flex-row gap-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img
                        className="w-full max-w-md h-auto rounded-2xl shadow-lg object-contain"
                        src={image}
                        alt={name}
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-around">
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h1 className="text-4xl font-extrabold text-orange-600 dark:text-orange-400">
                                {name}
                            </h1>
                            <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">
                                {description}
                            </p>
                            <p className="text-orange-600 dark:text-orange-400">
                                <h3 className="font-extrabold">
                                    Active cooking time: {timeActive} min
                                </h3>
                            </p>
                            <p className="text-orange-600 dark:text-orange-400">
                                <h3 className="font-extrabold">
                                    Passive cooking time: {timePassive} min
                                </h3>
                            </p>
                        </div>
                        <h2 className="mt-3 text-2xl font-bold text-orange-700 dark:text-orange-400">
                            Rating: {rating}
                        </h2>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Recipe Steps */}
                        <div>
                            <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-400 mb-3">
                                Steps
                            </h3>
                            <ol className="list-decimal list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
                                {Array.from(steps.entries()).map(
                                    ([index, description]) => (
                                        <li key={index}>{description}</li>
                                    )
                                )}
                            </ol>
                        </div>

                        {/* Ingredients */}
                        <div>
                            <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-400 mb-3 md:text-right ">
                                Ingredients
                            </h3>
                            <ul className="md:text-right text-neutral-700 dark:text-neutral-300 space-y-2">
                                {Array.from(ingredients.entries()).map(
                                    ([ingredient, quantity]) => (
                                        <li key={ingredient}>
                                            {quantity} {ingredient}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
