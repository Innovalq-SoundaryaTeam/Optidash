/**
 * OptiDash Journal — Blog Post Data
 * Single source of truth for every article. Add a new post here and it will
 * automatically appear on blog.html and get its own unique URL at
 * blog-details.html?post=<slug>
 */
const BLOG_POSTS = {

    "titanium-frames": {
        featured: true,
        category: "Craftsmanship",
        title: "The Architectural Evolution of Titanium Eyewear Frames",
        excerpt: "Discover how aerospace metallurgy revolutionized luxury frame manufacturing and set new durability benchmarks.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1400&q=80",
        author: "Marcus Reyes",
        authorRole: "Head of Product Design",
        authorImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
        authorBio: "Marcus leads frame engineering at OptiDash, translating aerospace-grade materials into wearable design.",
        date: "August 4, 2026",
        readTime: "7 min read",
        tags: ["Titanium", "Materials", "Engineering", "Luxury"],
        toc: ["Why Titanium Changed Everything", "Beta-Titanium vs. Pure Grades", "The Cold-Forging Process", "Living With Titanium Frames"],
        related: ["mazzucchelli-acetate", "frame-shape-guide"],
        body: [
            { type: "lead", text: "Titanium didn't enter eyewear through fashion — it arrived by way of the space program. Understanding that origin explains almost everything about why it still defines the top tier of luxury frames today." },
            { type: "h2", text: "Why Titanium Changed Everything" },
            { type: "p", text: "Before titanium, luxury frames were built from thick acetate or nickel alloys — materials that looked rich but sat heavily on the face and fatigued the skin behind the ears within hours. Titanium, first adapted from airframe components in the late 1980s, offered something the industry had never combined before: a strength-to-weight ratio nearly double that of steel, paired with total corrosion resistance." },
            { type: "p", text: "The result is a frame that can be finished paper-thin at the temple without becoming fragile. A titanium arm roughly a third the thickness of an acetate equivalent will still outlast it by decades, which is why so many heirloom-quality frames on the market today are titanium at their core, even when finished with acetate or horn overlays." },
            { type: "quote", text: "A well-forged titanium frame doesn't just resist damage — it returns to its original shape after being bent, which is a property acetate can never replicate." },
            { type: "h2", text: "Beta-Titanium vs. Pure Grades" },
            { type: "p", text: "Not all titanium is equal. Pure titanium (often labeled Grade 2) is soft enough to hand-finish but limited in how thin it can be drawn. Beta-titanium — an alloy blended with small amounts of molybdenum and other elements — is roughly 30% lighter while retaining superior flexibility, which is why it has become the standard for our ultra-light collections." },
            { type: "p", text: "The trade-off is manufacturing cost: beta-titanium requires specialized cold-forging equipment and significantly more polishing time, which is part of why frames built from it command a premium over standard alloys." },
            { type: "h2", text: "The Cold-Forging Process" },
            { type: "p", text: "Unlike acetate, which is heated and cut from sheet stock, titanium frames are cold-forged — shaped under intense pressure at room temperature to preserve the metal's internal grain structure. Heating titanium during shaping would compromise its fatigue resistance, which is why every OptiDash titanium frame is built using a seven-stage cold press before final hand polishing." },
            { type: "h2", text: "Living With Titanium Frames" },
            { type: "p", text: "For the wearer, the practical benefits show up in places you don't expect: hypoallergenic contact for sensitive skin, virtually no metal fatigue at the hinge over years of daily folding, and a frame that keeps its adjustment far longer between professional fittings. It's a material choice built for decades, not seasons." }
        ]
    },

    "blue-light-lenses": {
        featured: false,
        category: "Eye Health",
        title: "The Truth About Blue Light Lenses & Digital Strain",
        excerpt: "Do you really need anti-reflective coatings for your daily screen time? We break down the science.",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
        author: "Dr. Sarah Jenkins",
        authorRole: "Lead Optometrist",
        authorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
        authorBio: "Specializing in advanced ocular diagnostics and blue-light physiological impacts.",
        date: "August 7, 2026",
        readTime: "5 min read",
        tags: ["Eye Health", "Lenses", "Digital Strain", "Research"],
        toc: ["Understanding High-Energy Visible Light", "What the Research Actually Shows", "Do You Need Anti-Reflective Coatings?", "Our Clinical Recommendation"],
        related: ["titanium-frames", "frame-shape-guide"],
        body: [
            { type: "lead", text: "With the modern shift toward remote work and multi-screen environments, blue light filtering lenses have exploded in popularity. But what does clinical science actually say about them?" },
            { type: "h2", text: "Understanding High-Energy Visible Light" },
            { type: "p", text: "Natural blue light from the sun is essential for regulating our circadian rhythm. However, digital displays emit concentrated wavelengths in the 400-450nm range at close range for extended periods. Prolonged exposure of this kind is associated with eye fatigue, dryness, and disrupted sleep cycles in several small clinical studies." },
            { type: "quote", text: "The primary culprit of digital eye strain isn't just blue light — it's the reduced blink rate that comes from staring at pixels for hours." },
            { type: "h2", text: "What the Research Actually Shows" },
            { type: "p", text: "The clinical evidence on blue-light-blocking lenses specifically reducing eye strain is still mixed — several controlled trials found no statistically significant difference in reported fatigue between filtered and unfiltered lenses over short sessions. Where the research is much stronger is on evening screen use and sleep: filtering blue-violet wavelengths in the two hours before bed measurably improves melatonin onset." },
            { type: "h2", text: "Do You Need Anti-Reflective Coatings?" },
            { type: "p", text: "Yes — and this is where the real everyday benefit lives. Combining a micro-layer anti-reflective coating with selective blue-violet light filtration creates a balanced optical environment that meaningfully reduces glare from overhead lighting and screen reflections, which is the more common source of visual fatigue during a long workday." },
            { type: "h2", text: "Our Clinical Recommendation" },
            { type: "p", text: "If you spend more than six hours a day in front of screens, we recommend an anti-reflective coating as the priority upgrade, with blue-light filtration as a secondary benefit best reserved for your evening pair rather than your primary daytime lenses." }
        ]
    },

    "mazzucchelli-acetate": {
        featured: false,
        category: "Materials",
        title: "Mazzucchelli Acetate Explained",
        excerpt: "Why the world's most luxurious eyewear brands all source their materials from one Italian factory.",
        image: "https://images.pexels.com/photos/29274112/pexels-photo-29274112.jpeg",
        author: "Elena Rossi",
        authorRole: "Materials Sourcing Lead",
        authorImg: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
        authorBio: "Elena manages OptiDash's material partnerships across Northern Italy, including our acetate sourcing.",
        date: "July 29, 2026",
        readTime: "6 min read",
        tags: ["Acetate", "Materials", "Italy", "Craftsmanship"],
        toc: ["A Factory Founded in 1849", "What Makes Mazzucchelli Different", "The Layering Technique", "How to Spot Genuine Acetate"],
        related: ["titanium-frames", "frame-shape-guide"],
        body: [
            { type: "lead", text: "Walk into almost any luxury eyewear boutique in the world and there's a good chance the frames on display trace their material back to a single family-run factory outside Milan." },
            { type: "h2", text: "A Factory Founded in 1849" },
            { type: "p", text: "Mazzucchelli began as a textile and horn button manufacturer in the 19th century before pivoting to cellulose acetate in the early 1900s. Today it produces the overwhelming majority of premium acetate used across the eyewear industry, supplying both boutique studios and major fashion houses from the same rod and sheet lines." },
            { type: "p", text: "What keeps designers coming back isn't just brand heritage — it's consistency. Batch-to-batch color matching at this level of precision is genuinely difficult to replicate, and it's the reason a limited-edition tortoise pattern released this year will look identical to the same pattern released five years from now." },
            { type: "h2", text: "What Makes Mazzucchelli Different" },
            { type: "p", text: "Standard injection-molded plastic frames are manufactured in a single, uniform pour. Mazzucchelli acetate sheets, by contrast, are built up in layers — sometimes as many as a dozen thin sheets of different colors laminated together before being cut. This is what produces the depth and dimensionality you see when light passes through a genuine acetate frame, an effect injection-molded plastic simply cannot fake." },
            { type: "quote", text: "You can always tell real laminated acetate by holding it to a light source — the color shifts in layers rather than sitting flat." },
            { type: "h2", text: "The Layering Technique" },
            { type: "p", text: "Each acetate block is cured for weeks before it's ever cut, allowing internal stresses in the material to fully settle. Rushing this step is the most common cause of frames that warp or crack prematurely — which is why cheaper acetate alternatives, cured in a fraction of the time, tend to fail years earlier than the genuine article." },
            { type: "h2", text: "How to Spot Genuine Acetate" },
            { type: "p", text: "Weight, warmth to the touch, and visible depth in the pattern are the three tells. Genuine acetate feels noticeably warmer against skin than plastic within seconds, a small but reliable detail worth checking before you buy." }
        ]
    },

    "frame-shape-guide": {
        featured: false,
        category: "Style Guide",
        title: "Finding Your Perfect Frame Shape",
        excerpt: "A comprehensive styling guide for round, square, oval, and heart-shaped facial structures.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=80",
        author: "Priya Nair",
        authorRole: "Senior Style Consultant",
        authorImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        authorBio: "Priya has styled frame collections for over a decade, specializing in face-shape pairing.",
        date: "July 22, 2026",
        readTime: "6 min read",
        tags: ["Style Guide", "Face Shape", "Fit", "Fashion"],
        toc: ["Round Faces", "Square Faces", "Oval Faces", "Heart-Shaped Faces", "A Note on Bridge Fit"],
        related: ["mazzucchelli-acetate", "blue-light-lenses"],
        body: [
            { type: "lead", text: "The single biggest factor in whether a frame flatters you has almost nothing to do with brand or trend — it comes down to contrast between your face's natural shape and the frame's silhouette." },
            { type: "h2", text: "Round Faces" },
            { type: "p", text: "If your face has soft curves and similar width and length, angular frames — rectangles or geometric shapes with sharp corners — add definition that a round or oval frame would only echo. Look for frames wider than your face's widest point to elongate the overall silhouette." },
            { type: "h2", text: "Square Faces" },
            { type: "p", text: "Strong jawlines and a broad forehead pair best with rounded or oval frames that soften the angles rather than reinforcing them. Avoid heavy, boxy frames, which tend to exaggerate an already strong jaw." },
            { type: "quote", text: "The goal is never to hide your face shape — it's to create a balanced contrast that draws the eye where you want it." },
            { type: "h2", text: "Oval Faces" },
            { type: "p", text: "Oval is often called the most versatile face shape because its balanced proportions work with nearly any frame silhouette. The main thing to avoid is frames that are oversized to the point of overwhelming your natural proportions." },
            { type: "h2", text: "Heart-Shaped Faces" },
            { type: "p", text: "A narrower chin and wider forehead pair well with frames that are bottom-heavy or have a light, rimless lower edge, which balances visual weight away from the temples and down toward the cheekline." },
            { type: "h2", text: "A Note on Bridge Fit" },
            { type: "p", text: "Shape matters, but bridge fit is what actually determines comfort. A frame that constantly slides down your nose will undercut even the most flattering silhouette — always prioritize a proper bridge measurement before shape." }
        ]
    }
};

const BLOG_ORDER = ["titanium-frames", "blue-light-lenses", "mazzucchelli-acetate", "frame-shape-guide"];
