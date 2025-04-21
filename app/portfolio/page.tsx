import Card from "../components/common/Cards";
import "../styles/markdown.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import portfolio from "../data/portfolio";

export default function PortfolioSection() {
	return (
		<Card className="markdown" title="프로젝트" delay={200}>
				<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeSanitize, rehypeRaw]}
				>
							{portfolio.description}
							</ReactMarkdown>
			</Card>
	)
}