interface TitleProps {
    title: string;
    id?: string;
    level?: "h1" | "h2" | "h3";
}

const Title = ({
    title,
    id,
    level = "h2"
}: TitleProps) => {

    const Heading = level;

    return (
        <Heading
            id={id}
            className="uppercase text-3xl text-secondary font-bold mb-4 text-center "
        >
            {title}
        </Heading>
    );
};

export default Title;