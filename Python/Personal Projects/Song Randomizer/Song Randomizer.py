# # Thomas Wolf
# # A program to randomize songs from youtube music
# # 12/6/22
#
# from ytmusicapi import YTMusic
# ytmusic = YTMusic('headers_auth.json')
#
# # def main():
# #     get_songs=yt.
#
# def test_get_user_playlists(self):
#     results = self.yt.get_user("qh7k7Qt9hj4zLB_CrCq_8A")
#     results = self.yt.get_user_playlists("qh7k7Qt9hj4zLB_CrCq_8A",results['playlists']['params'])
#     self.assertGreater(len(results), 100)
#     print(results)
#     # playlistId = ytmusic.create_playlist("test", "test description")
#     # search_results = ytmusic.search("Oasis Wonderwall")
#     # ytmusic.add_playlist_items(playlistId, [search_results[0]['videoId']])
#
# # if __name__ == "__main__":
# #     main()

import unittest
import unittest.mock
import configparser
import time
import sys
sys.path.insert(0, '..')
from ytmusicapi.ytmusic import YTMusic  # noqa: E402

config = configparser.RawConfigParser()
config.read('./test.cfg', 'utf-8')

sample_album = "MPREb_4pL8gzRtw1p"  # Eminem - Revival
sample_video = "hpSrLjc5SMs"  # Oasis - Wonderwall
sample_playlist = "PL6bPxvf5dW5clc3y9wAoslzqUrmkZ5c-u"  # very large playlist


class TestYTMusic(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.yt = YTMusic(requests_session=False)
        cls.yt_auth = YTMusic(config['auth']['headers_file'])
        cls.yt_brand = YTMusic(config['auth']['headers'], config['auth']['brand_account'])

    def test_init(self):
        self.assertRaises(Exception, YTMusic, "{}")

    def test_setup(self):
        headers = YTMusic.setup(config['auth']['headers_file'], config['auth']['headers_raw'])
        self.assertGreaterEqual(len(headers), 2)
        headers_raw = config['auth']['headers_raw'].split('\n')
        with unittest.mock.patch('builtins.input', side_effect=(headers_raw + [EOFError()])):
            headers = YTMusic.setup(config['auth']['headers_file'])
            self.assertGreaterEqual(len(headers), 2)