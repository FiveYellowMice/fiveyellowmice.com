require 'openssl'

module Jekyll
  module UrlProxyFilter
    def url_proxy(url)
      config = @context.registers[:site].config['url_proxy']
      base = config['base']
      key = ENV['URL_PROXY_KEY'] || config['key']

      digest = OpenSSL::HMAC.hexdigest(
        OpenSSL::Digest.new('sha1'),
        key,
        url
      )
      url_hex = url.bytes.map{|b| b.to_s(16) }.join

      "#{base}/#{digest}/#{url_hex}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::UrlProxyFilter)
