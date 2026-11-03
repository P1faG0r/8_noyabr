import os
import requests
import time

# Папка для сохранения фотографий
output_dir = "assets/images/timeline"
os.makedirs(output_dir, exist_ok=True)

# Список дней с их точными датами и ключевыми темами
timeline_days = [
    {"day": 1, "name": "day-01.jpg", "query": "2020 Nagorno-Karabakh conflict"},
    {"day": 2, "name": "day-02.jpg", "query": "Azerbaijani Armed Forces mobilization 2020"},
    {"day": 3, "name": "day-03.jpg", "query": "Karabakh war 2020 front line"},
    {"day": 4, "name": "day-04.jpg", "query": "Nagorno Karabakh war 2020 artillery"},
    {"day": 5, "name": "day-05.jpg", "query": "Azerbaijan army 2020"},
    {"day": 6, "name": "day-06.jpg", "query": "Nagorno-Karabakh frontline 2020"},
    {"day": 7, "name": "day-07.jpg", "query": "Suqovuşan Tartar Azerbaijan"},
    {"day": 8, "name": "day-08.jpg", "query": "Jabrayil Azerbaijan 2020"},
    {"day": 9, "name": "day-09.jpg", "query": "Azerbaijani soldiers 2020"},
    {"day": 10, "name": "day-10.jpg", "query": "Nagorno-Karabakh conflict 2020"},
    {"day": 11, "name": "day-11.jpg", "query": "Azerbaijani armed forces military"},
    {"day": 12, "name": "day-12.jpg", "query": "2020 Karabakh war military vehicles"},
    {"day": 13, "name": "day-13.jpg", "query": "Hadrut Khojavend 2020"},
    {"day": 14, "name": "day-14.jpg", "query": "Moscow ceasefire Nagorno-Karabakh 2020"},
    {"day": 15, "name": "day-15.jpg", "query": "Ganja missile attacks 2020"},
    {"day": 16, "name": "day-16.jpg", "query": "Azerbaijani army Karabakh 2020"},
    {"day": 17, "name": "day-17.jpg", "query": "Second Karabakh War 2020"},
    {"day": 18, "name": "day-18.jpg", "query": "Fuzuli Khojavend Karabakh"},
    {"day": 19, "name": "day-19.jpg", "query": "Azerbaijani military forces 2020"},
    {"day": 20, "name": "day-20.jpg", "query": "Karabakh frontline military 2020"},
    {"day": 21, "name": "day-21.jpg", "query": "Fuzuli Azerbaijan 2020"},
    {"day": 22, "name": "day-22.jpg", "query": "Khodaafarin Bridges Azerbaijan"},
    {"day": 23, "name": "day-23.jpg", "query": "Second Nagorno Karabakh War military"},
    {"day": 24, "name": "day-24.jpg", "query": "Zangilan Azerbaijan 2020"},
    {"day": 25, "name": "day-25.jpg", "query": "Minjivan Zangilan Azerbaijan"},
    {"day": 26, "name": "day-26.jpg", "query": "Agband Zangilan Azerbaijan border"},
    {"day": 27, "name": "day-27.jpg", "query": "Qubadli Azerbaijan 2020"},
    {"day": 28, "name": "day-28.jpg", "query": "Azerbaijan Armed Forces Patriotic War"},
    {"day": 29, "name": "day-29.jpg", "query": "Gubadly city Azerbaijan"},
    {"day": 30, "name": "day-30.jpg", "query": "Humanitarian ceasefire Karabakh 2020"},
    {"day": 31, "name": "day-31.jpg", "query": "Azerbaijan flag Karabakh war 2020"},
    {"day": 32, "name": "day-32.jpg", "query": "Barda missile strikes 2020"},
    {"day": 33, "name": "day-33.jpg", "query": "Karabakh Patriotic War military"},
    {"day": 34, "name": "day-34.jpg", "query": "Azerbaijani army offensive 2020"},
    {"day": 35, "name": "day-35.jpg", "query": "Nagorno Karabakh war tank artillery"},
    {"day": 36, "name": "day-36.jpg", "query": "Azerbaijan military victory 2020"},
    {"day": 37, "name": "day-37.jpg", "query": "Second Karabakh War soldiers"},
    {"day": 38, "name": "day-38.jpg", "query": "Azerbaijan flag military Karabakh"},
    {"day": 39, "name": "day-39.jpg", "query": "Khojavend Azerbaijan 2020"},
    {"day": 40, "name": "day-40.jpg", "query": "Shusha liberation operation"},
    {"day": 41, "name": "day-41.jpg", "query": "Special forces Shusha battle 2020"},
    {"day": 42, "name": "day-42.jpg", "query": "Khojavend villages Azerbaijan"},
    {"day": 43, "name": "day-43.jpg", "query": "Shusha Azerbaijan Victory 2020"},
    {"day": 44, "name": "day-44.jpg", "query": "Karabakh 44 days victory"},
    {"day": 45, "name": "day-45.jpg", "query": "2020 Nagorno-Karabakh armistice agreement"}
]

# Заголовки для имитации браузера (User-Agent)
headers = {
    "User-Agent": "QarabagArchiveBot/1.0 (educational project; contact@example.com)"
}

def get_wikimedia_image(query):
    """Поиск URL реального изображения через Wikipedia API"""
    search_url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "generator": "search",
        "gsrsearch": query,
        "gsrlimit": 1,
        "prop": "pageimages",
        "piprop": "original"
    }
    try:
        res = requests.get(search_url, params=params, headers=headers, timeout=5)
        data = res.json()
        pages = data.get("query", {}).get("pages", {})
        for page_id, page_data in pages.items():
            if "original" in page_data:
                return page_data["original"]["source"]
    except Exception:
        pass
    return None

def download_photo(day_info):
    filepath = os.path.join(output_dir, day_info["name"])
    
    # 1. Пробуем найти реальное фото на Wikimedia Commons
    img_url = get_wikimedia_image(day_info["query"])
    
    # 2. Если фото не найдено, используем резервный тематический генератор
    if not img_url:
        img_url = f"https://picsum.photos/seed/qarabag{day_info['day']}/800/600"

    try:
        res = requests.get(img_url, headers=headers, timeout=10)
        if res.status_code == 200:
            with open(filepath, "wb") as f:
                f.write(res.content)
            print(f"[✓] Скачано: {day_info['name']} (День {day_info['day']})")
        else:
            print(f"[x] Ошибка загрузки {day_info['name']}")
    except Exception as e:
        print(f"[!] Исключение на дне {day_info['day']}: {e}")

if __name__ == "__main__":
    print("Начало скачивания и переименования изображений...")
    for item in timeline_days:
        download_photo(item)
        time.sleep(0.3) # Небольшая пауза между запросами
    print(f"\nВсе файлы сохранены в папку: {os.path.abspath(output_dir)}")