#ifndef __Block__
#define __Block__

#include <iostream>
#include <cocos2d.h>

USING_NS_CC;

class Block : public Sprite 
{
private:

	//�������block
	static Vector<Block*> * blocks;
	int lineIndex;

public:

	static Vector<Block*> * getBlocks();

	static Block* createWithArgs(Color3B color, Size size, std::string label, float fontSize, Color4B textColor);

	//��ʼ��������������ɫ�������С���֡������С��������ɫ
	virtual bool initWithArgs(Color3B color, Size size, std::string label, float fontSize, Color4B textColor);

	//��Vector���Ƴ�blocks
	void removeBlock();

	void setLineIndex(int lineIndex);

	int getLineIndex();

	void moveDowm();
	
};


#endif // __Block __