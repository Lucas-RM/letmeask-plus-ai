import { CircleX, PanelLeftClose, Wand, X } from "lucide-react";
import { Button } from "./components/ui/button";

export function App() {
	return (
		<div>
			<Button variant="default">Hello World</Button>
			<Button variant="secondary">Hello World</Button>
			<Button variant="outline">Hello World</Button>
			<Button variant="ghost">Hello World</Button>
			<Button variant="destructive">Hello World</Button>
			<Button variant="link">Hello World</Button>
			<br />
			<Button size="sm">Hello World</Button>
			<Button size="lg">Hello World</Button>
			<Button size="icon">
				<Wand />
			</Button>
			<Button size="icon">
				<PanelLeftClose />
			</Button>
			<Button size="icon">
				<X />
			</Button>
			<Button size="icon">
				<CircleX />
			</Button>
		</div>
	);
}
