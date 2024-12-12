import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { blogSchema } from 'starlight-blog/schema'



const events = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		date: z.coerce.date(),
		location: z.string(),
		rsvpLink: z.string(),
		
	}),
});

const people = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		name: z.string(),
		position: z.string(),
		socialLink: z.string(),
		image: z.string(),
	}),
});

export const collections = { 
	docs: defineCollection({ schema: docsSchema({
		extend: (context) => blogSchema(context)
	  }) }),
	
	events,
	people 
  };
  
