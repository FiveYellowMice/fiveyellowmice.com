module Jekyll
	module AssetFilter
		def json_escape(input)
			input.to_s.gsub("\\", "\\\\").gsub('"', "\\\"").gsub("\n", "\\n")
		end
	end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
