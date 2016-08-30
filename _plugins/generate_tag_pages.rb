module Jekyll
	class TagPage < Page
		def initialize(site, base, dir, name)
			@site = site
			@base = base
			@dir = dir
			@name = "#{name}.html"
			
			self.process(@name)
			self.read_yaml(File.join(base, '_layouts'), 'tag.html')
			
			self.data['title'] = name
		end
	end
	
	class TagPageGenerator < Generator
		safe true
		
		def generate(site)
			if site.layouts.key? 'tag' then
				site.tags.each_key do |tag|
					site.pages << TagPage.new(site, site.source, 'tags', tag)
				end
			end
		end
	end
end
