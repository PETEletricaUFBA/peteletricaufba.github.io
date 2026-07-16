import Image from '../lib/Image';

export default function BlogSignature(author: any, index: number): JSX.Element {
    author = author.author;

    return (
        <div
            className="authorbio"
            key={index.toString()}
            style={{
                textAlign: "center",
                padding: "10px",
                width: "180px",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <div
                style={{
                    width: "120px",
                    height: "120px",
                    margin: "0 auto 15px auto",
                    overflow: "hidden",
                    borderRadius: "50%"
                }}
            >
                <Image
                    src={author.image}
                    alt={author.name}
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
            </div>

            <h4
                style={{
                    margin: 0,
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#333",
                    lineHeight: "1.2",
                    minHeight: "52px",
                    textAlign: "center"
                }}
            >
                {author.name}
            </h4>
        </div>
    );
}