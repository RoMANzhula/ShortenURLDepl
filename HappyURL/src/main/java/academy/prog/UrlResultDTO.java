package academy.prog;

public class UrlResultDTO extends UrlDTO {
    protected String shortUrl;

    public String getShortUrl() {
        return shortUrl;
    }

    public void setShortUrl(String shortUrl) {
        this.shortUrl = "http://localhost:8080/my/" + shortUrl;
    }
}