const fs = require('fs');

try {
    let p = fs.readFileSync('public/Graffiti_OM.svg', 'utf8');

    // Remove <defs>...</defs> block completely, and the xml header
    p = p.replace(/<\?xml[\s\S]*?\?>\s*/, '');
    p = p.replace(/<defs>[\s\S]*?<\/defs>/, '');

    // Replace the opening <svg ...> tag with the correct React props
    p = p.replace(/<svg\s+id="Capa_1"[^>]*>/, '<svg className={`w-full h-full ${className || ""}`} {...props} id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1985 950">');

    // Replace class="cls-..." with className="..."
    p = p.replace(/class="cls-3"/g, 'className="fill-foreground dark:fill-primary transition-colors duration-500"');
    p = p.replace(/class="cls-[124]"/g, 'className="fill-foreground/40 dark:fill-primary/40 transition-colors duration-500"');

    let output = `import * as React from "react"

export function GraffitiOM({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        ${p.trim()}
    )
}
`;

    fs.writeFileSync('src/components/graffiti-om.tsx', output);
    console.log('Successfully created the GraffitiOM component.');
} catch (e) {
    console.error(e);
}
