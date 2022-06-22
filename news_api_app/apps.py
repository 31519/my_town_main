from django.apps import AppConfig


class NewsApiAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'news_api_app'

    def ready(self):
        import news_api_app.signals


